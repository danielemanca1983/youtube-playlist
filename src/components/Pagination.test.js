import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('pagination', function() {
  it('should render', function() {
    const wrapper = shallow(
      <Pagination 
        videosPerPage={6}
        totalVideos={12}
        paginate={console.log()}
      />
    )
    console.log(wrapper.debug());
    expect(wrapper.find('.youtube__playlist__pagination__item')).toHaveLength(2) ;
  });
});
