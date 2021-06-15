import { useQuery, graphql } from 'relay-hooks';
import fetchQuerySSR from 'lib/fetchQuerySSR';
import SingleNewsMainHeaderContainer from 'containers/SingleNews/MainHeader';
import extractDataFromSSRResponse from 'lib/extractDataFromSSRResponse';

const postQuery = graphql`
  query SlugNewsQuery($id: ID!, $idType: PostIdType) {
    post(idType: $idType, id: $id) {
      id
      ...MainHeaderSingleNews_data
    }
  }
`;

export default function Post({ variables }) {
  const { error, data: dataPost, isLoading } = useQuery(postQuery, variables);
  const { post } = dataPost || {};

  if (error) return <div>{error.message}</div>;
  if (!post || isLoading) return 'loading';

  return <SingleNewsMainHeaderContainer data={post} />;
}

export async function getStaticPaths() {
  const relayData = await fetchQuerySSR(graphql`
    query SlugNews_staticPaths_Query {
      posts(first: 100) {
        nodes {
          date
          slug
        }
      }
    }
  `);
  const { posts } = extractDataFromSSRResponse(relayData);

  return {
    paths: posts.nodes.map(({ date, slug }) => {
      const [year, month, day] = date.substr(0, 10).split('-');
      return { params: { year, month, day, slug } };
    }),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params: { slug } }) {
  const variables = {
    id: slug,
    idType: 'SLUG'
  };
  const relayData = await fetchQuerySSR(postQuery, variables);

  return {
    props: { relayData, variables },
    revalidate: 1
  };
}
