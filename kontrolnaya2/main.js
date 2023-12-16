import  {TabsComponent} from './components/tabs-component';
import {ContentComponent} from './components/tab-content-component';
import {render, RenderPosition} from './render';



const bodyContainer = document.querySelector('.tabs');
const contentContainer = document.querySelector('.tab-content');


render(new TabsComponent(), bodyContainer, RenderPosition.AFTEREND);
render(new ContentComponent(), contentContainer, RenderPosition.AFTEREND);
