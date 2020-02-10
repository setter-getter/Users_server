import Mn from 'backbone.marionette'
import RedactionTemplate from './template/redactionTemplate.hbs'
import { FormView } from "../FormView";


export class RedactionView extends Mn.View{
    constructor(){
        super({
            triggers: {
                'click .user_info': 'openRedaction'
            },
            className: 'redaction_view',
            template: RedactionTemplate,
            regions: {
                region: '.redaction'
            }
        });
           this._views = {
            'redaction_need': FormView,
        }
    }

    openView(choice){
        let _class = this._views[choice];
        this.showChildView('region', new _class())
    }
}

