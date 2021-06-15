import buildHrefByObjectType from 'lib/buildHrefByObjectType';
import SingleNewsMainHeader from 'components/news/Single/MainHeader';
import { useFragment, graphql } from 'relay-hooks';

const fragmentData = graphql`
  fragment MainHeaderSingleNews_data on Post {
    slug
    title
    excerpt
    date
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
    author {
      node {
        name
        slug
      }
    }
  }
`;

export default function SingleNewsMainHeaderContainer({ data: dataProps }) {
  const data = useFragment(fragmentData, dataProps);

  return (
    <SingleNewsMainHeader
      imageSrc={data.featuredImage?.node?.sourceUrl}
      imageAltText={data.featuredImage?.node?.altText}
      title={data.title}
      excerpt={data.excerpt}
      date={data.date}
      authorName={data.author.node?.name}
      authorHref={buildHrefByObjectType('author', data.author.node)}
    />
  );
}
