import _ from 'lodash';

export default function paginate(array, pageNumber, pageSize) {
  const startIndex = pageNumber * pageSize - pageSize;
  return _(array).slice(startIndex).take(pageSize).value();
};