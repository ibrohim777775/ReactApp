import React, { Component } from 'react';
import { StyledButton, StyledDiv } from '../Styles/Pagination.js';
import _ from 'lodash';

import '../Styles/Pagination.js';


class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { page, size, onPageChange, pageRealNumber } = this.props;
    const pageNumbers = Math.ceil(page / size);
    const pageItems = _.range(1, pageNumbers + 1);

    return (
      <div>
        <StyledDiv>
          {pageItems.map((items, index) =>
            <StyledButton onClick={() => onPageChange(items)} key={index} disabled={pageRealNumber === items ? true : false}> {items} </StyledButton>
          )}

        </StyledDiv>
      </div >
    );
  }
}

export default Pagination;