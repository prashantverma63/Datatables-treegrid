import { Component , OnInit , ViewChild} from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { TreeGridComponent,PageSettingsModel, SortSettings, SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public data: DataManager;
  public pageSetting: PageSettingsModel;
  public sortSettings: SortSettingsModel;

  //@ViewChild('treegrid')
  public treegrid: TreeGridComponent;

  ngOnInit(): void {
      this.data =  new DataManager({ url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData', adaptor: new WebApiAdaptor });
      this.pageSetting = { pageCount: 3 };
      this.sortSettings = {
        columns:[
          {field:"TaskID",direction:"Ascending"}
        ]
      };
  }
}
