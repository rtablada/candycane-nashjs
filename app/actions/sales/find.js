import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`sale`)
export default class Find extends Action {
  /**
   * This function can return a promise (or raw POJOs) of data to be looked up
   *
   * @return Object/Promise
   */
  data() {
    const Image = this.app.make(`store`).model(`sale`);

    return Image.where({id: this.request.params.id}).fetch({ withRelated: [`branch`] });
  }
}
