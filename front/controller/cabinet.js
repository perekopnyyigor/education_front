class CabinetController {
    static onLoad()
    {
        MainView.head();
        CabinetView.onload();
    }
    static reg()
    {
        MainView.head();
        CabinetView.reg();
    }
    static reg_action()
    {
        let user = CabinetView.regGetData();
        User.add(user);

    }
    static enter()
    {
        let user = CabinetView.enterGetData();
        User.enter(user);
        CabinetController.onLoad();
    }

}