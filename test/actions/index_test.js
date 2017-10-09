import { expect} from '../test_helper';
import { SAVE_COMMENT} from '../../src/actions/type';
import { saveComment } from '../../src/actions';

describe('actions', () => {
    describe('SaveComment', ( ) => {
          it('has correct type', () => {
            const action = saveComment();
              expect(action.type).to.equal(SAVE_COMMENT);
          });
          it('has correct payload', () => {
            const action = saveComment('new comment');
            expect(action.payload).to.equal('new comment');

          });
    });
});
