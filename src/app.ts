import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router, NavigationInstruction, Next, RedirectToRoute } from 'aurelia-router';

@autoinject
export class App {
    private router: Router;

    constructor(
    ){}

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Multiple Bundle Test';
        config.map([
            {
                route: '',
                redirect: 'main'
            },
            {
                route: 'main',
                name: 'main',
                moduleId: 'main-bundle/main-component'
            },
            {
                route: 'one',
                name: 'one',
                moduleId: 'bundle-one/component-one'
            },
            {
                route: 'two',
                name: 'two',
                moduleId: 'bundle-two/component-two'
            }
        ]);

        this.router = router;
    }

    activate(){
    }
}
