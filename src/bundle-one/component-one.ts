import { autoinject } from 'aurelia-framework';

import { SomeService } from '../shared/some-service';

@autoinject
export class ComponentOne {
    constructor(private someService: SomeService){
        this.someService.log();
    }
}