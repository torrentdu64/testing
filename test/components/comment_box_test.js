import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// google doc chai jquery
describe( 'CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has correct class', () => {
    expect(component).to.have.class('comment-box');
  });
    it( 'has text area', () => {
        expect(component.find('textarea')).to.exist;
    });
    it('has a botton', () => {
      expect(component.find('button')).to.exist;
    });

    describe('enter some text' , () => {

      beforeEach(() => {
        component.find('textarea').simulate('change', 'new comment');
      });
      it('shows text in text area', () => {
          expect(component.find('textarea')).to.have.value('new comment');
      });
      it('when submitted , clear input', () => {

      });
    });

});
