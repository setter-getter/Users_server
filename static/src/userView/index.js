import Mn from 'backbone.marionette'
import Bb from 'backbone'
import UserTemplate from './template/userTemplate.hbs'
import _ from 'underscore'


export class UsersView extends Mn.CollectionView {
    constructor() {
        super({
            template: false,
            childView: Users,
            collection: new CollectionUsers()
        })
    }

    onRender() {
        this.collection.fetch()
    }
}

class CollectionUsers extends Bb.Collection {
    url() {
        return '/user_list/users/'
    }
}

class Users extends Mn.View {
    constructor(option = {}) {
        _.defaults(option, {
            template: UserTemplate,
            // triggers: {
            //      'click .user_info': 'openRedaction'
            //  }
        });
        super(option)
    }

    templateContext() {
        return {
            name: this.model.get('name'),
            email: this.model.get('email'),
            photo: this.model.get('photo'),
        }
    }
}


//
// $(document).ready(function () {
//     $('#save_contact').click(function () {
//
//
// $('#contact').css('background', '#' + GetNumber(0,9)+GetNumber(0,9)+GetNumber(0,9)+GetNumber(0,9)+GetNumber(0,9)+GetNumber(0,9)+GetNumber(0,9))
//   })
// function GetNumber(min,max) {
// return Math.floor(Math.random() * (max - min + 1) + min)
// }
// })
