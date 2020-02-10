import Mn from 'backbone.marionette'
import FormTemplate from './template/formTemplate.hbs'
// import {Users} from '../userView/index'

export class FormView extends Mn.View{
    constructor() {
        super({
            tagName: 'div',
            className: 'form_view',
            template: FormTemplate,
        });
}
}

