function post({ date = '', slug = '' }) {
  if (date && slug) {
    return `/${date.slice(0, 10).replace(/-/g, '/')}/${slug}`;
  }

  return undefined;
}

function page({ slug = '' }) {
  if (slug) {
    return `/page/${slug}`;
  }

  return undefined;
}

function category({ slug }) {
  if (slug) {
    return `/categoria/${slug}`;
  }

  return undefined;
}

function dossier({ slug }) {
  if (slug) {
    return `/dossier/${slug}`;
  }

  return undefined;
}

function tag({ slug }) {
  if (slug) {
    return `/tag/${slug}`;
  }

  return undefined;
}

function brandsharepremium({ slug }) {
  if (slug) {
    return `/share/${slug}`;
  }

  return undefined;
}

function author({ slug }) {
  if (slug) {
    return `/autor/${slug}`;
  }

  return undefined;
}

function opinion({ slug }) {
  if (slug) {
    return `/opiniao/${slug}`;
  }

  return undefined;
}

const getBuilder = (type) =>
  ({ post, page, category, dossier, opinion, tag, brandsharepremium, author }[type]);

export default function buildHrefByObjectType(type = '', params = {}) {
  const builder = getBuilder(type.toLowerCase());
  if (!builder) {
    return undefined;
  }

  return builder(params);
}
