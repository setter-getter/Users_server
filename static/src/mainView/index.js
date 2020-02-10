import  Mn from 'backbone.marionette'
import ViewTemplate from './template/main.hbs'
import {RedactionView} from '../RedactionView/index'
import {UsersView} from '../userView/index'
import {FormView} from '../FormView/index'

export  class View_ extends  Mn.View{
    constructor() {
        super({
            tagName:'p',
            className: 'container_view',
            template: ViewTemplate,
            regions: {
                redact: '.container_1',
                users: '.container_2'
            },
             childViewTriggers: {
                'openRedaction': 'showForm'
             }
        });
    }

   onRender(){
        this.showChildView('redact', new RedactionView());
        // this.showChildView('redact', new FormView());
        this.showChildView('users', new UsersView());
    }

    onShowForm(){
        let _view = this.getChildView('redact');
        _view.openView('redaction_need')
    }
}