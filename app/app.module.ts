/**
 * NPM Packages.
 */
import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser'; 

/**
 * Project packages.
 */
import {EventsAppComponent}         from './events-app.component';
import {EventsListComponent}        from './events/events-list.component'; 
import {EventService}               from './events/shared/event.service';
import {EventThumbnailComponent}    from './events/event-thumbnail.component';
import {NavbarComponent}            from './nav/navbar.component';


@NgModule({
    /**
     * This is the top level componenet which will load all the other componenets.
     * Because of that, we need to tell Angular that the "EventsAppComponent" will be used
     * to bootstrap our application.
     */
    bootstrap: [
        EventsAppComponent
    ],

    /**
     * Components needs to be registred on a module in order to work.
     */
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent
    ],

    /**
     * TODO: I don't why this needs to be done.
     */
    imports: [
        BrowserModule
    ],

    /**
     * When you declare a service as a "@Injectable" and you want it to be usable on other components, you need
     * to specify it on the "providers" module attribute so Angular can correctly do the "dependency injection" on other modules for you.
     */
    providers: [
        EventService
    ]
})
export class AppModule {

}