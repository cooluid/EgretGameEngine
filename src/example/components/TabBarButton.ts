/**
 * tabbar的按钮
 */
class TabBarButton extends egret.gui.TabBarButton {
    public constructor() {
        super();

    }

    private mydata:any;
    public set data(value:any)
    {
        this.mydata = value;
        if(this.iconDisplay)
        {
            this.iconDisplay.source = this.data.title;
        }
        if(this.iconDisplaySelected)
        {
            this.iconDisplaySelected.source = this.data.titleSelected;
        }
    }

    public get data():any
    {
        return this.mydata;
    }

    public iconDisplay:egret.gui.UIAsset;
    public iconDisplaySelected:egret.gui.UIAsset;

    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);
        if(!this.data) return;
        if(instance == this.iconDisplay)
        {
            this.iconDisplay.source = this.data.title;
        }
        if(instance == this.iconDisplaySelected)
        {
            this.iconDisplaySelected.source = this.data.titleSelected;
        }

    }
}