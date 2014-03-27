
	public var authName : String = "Enter your FB Login";
	public var authToken : String = "Enter your FB Password";
	public var windowTitle = "Connect to Master";
	public var windowRect1 = 30;
	public var windowRect2 = 30;
	public var windowRect3 = 120;
	public var windowRect4 = 50;
	public var windowRect : Rect = Rect (windowRect1, windowRect2, windowRect3, windowRect4);
	// vars with hide don't show up in inspector. at least that's the plan.
	public var windowNickField1 = 20;
	public var windowNickField2 = 15;
	public var windowNickField3 = 110;
	public var windowNickField4 = 40;
	public var windowPassField1 = 20;
	public var windowPassField2 = 15;
	public var windowPassField3 = 110;
	public var windowPassField4 = 40;
	public var windowConnectRect1 = 20;
	public var windowConnectRect2 = 20;
	public var windowConnectRect3 = 90;
	public var windowConnectRect4 = 35;
	public var windowDiscon1 = 60;
	public var windowDiscon2 = 60;
	public var windowDiscon3 = 120;
	public var windowDiscon4 = 50;
	public var windowDisconButton1 = 50;
	public var windowDisconButton2 = 50;
	public var windowDisconButton3 = 50;
	public var windowDisconButton4 = 50;
	public var ConnectButtonText = "Connect";
	var s1 : GUISkin;//["LoginSkin.guiskin"];
	//var toggle = true;
function Start() {

	s1 == "LoginSkin";
	}
function Connect()
	{
	/*PhotonNetwork.AuthValues = new AuthenticationValues();
	PhotonNetwork.AuthValues.SetAuthParameters(authName, authToken);*/
	PhotonNetwork.ConnectUsingSettings("0.1");
	}

function Window0() {
	authName = GUI.TextField (Rect (windowNickField1, windowNickField2, windowNickField3, windowNickField4), authName, 25);
		
	authToken = GUI.TextField (Rect (windowPassField1, windowPassField2, windowPassField3, windowPassField4), authToken, 25);
	
	
	if (GUI.Button(Rect (windowConnectRect1, windowConnectRect2, windowConnectRect3, windowConnectRect4), ConnectButtonText))
		Connect();

}
function OnGUI() {
	GUI.skin = s1;
	
	(GUI.Window (0, windowRect, Window0, windowTitle));
	// PhotonNetwork.OnConnectedToMaster(GUI.Window (1, Rect (windowDisconButton1, windowDisconButton2, windowDisconButton3, windowDisconButton4), Window1, "Connection Status"));
	}
	
function Window1() {

	if (GUI.Button(Rect (windowDisconButton1, windowDisconButton2, windowDisconButton3, windowDisconButton4), "Disconnect"))
		Disconnect();
		
	}


function Disconnect() {

	PhotonNetwork.Diconnect();
	}
	
	