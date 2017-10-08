import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// google doc chai jquery
describe( 'CommentBox', () => {
  it('has correct class', () => {
    const component = renderComponent(CommentBox);
    expect(component).to.have.class('comment-box');
  });
    it( 'has text area', () => {
      const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exist;
    });
    it('has a botton', () => {
      const component = renderComponent(CommentBox);
      expect(component.find('button')).to.exist;
    });

});
