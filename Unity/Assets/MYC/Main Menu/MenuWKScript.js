// CopyRight Gaming
// MenuSCript toggles Menu GUI and passphase
// Code by: SKSKSUnite
// Dev State: Primitive

//script
//Vars Part - All Script's vars are defined here
	public var authName : String = "Enter your FB Login";
	public var authToken : String = "Enter your FB Password";
	public var windowTitle = "Connect to Master";
	public var windowTitle2 = "Authenticating System"
	/*public var windowRect1 = 30;
	public var windowRect2 = 30;
	public var windowRect3 = 120;
	public var windowRect4 = 50;*/
	public var windowRect : Rect /*= Rect (windowRect1, windowRect2, windowRect3, windowRect4)*/;
	public var windowRect2 : Rect
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
	/*public var windowDiscon1 = 60;
	public var windowDiscon2 = 60;
	public var windowDiscon3 = 120;
	public var windowDiscon4 = 50;*/
	public var windowAuthButton1 = 50;
	public var windowAuthButton2 = 50;
	public var windowAuthButton3 = 50;
	public var windowAuthButton4 = 50;
	//public var 
	public var ConnectButtonText = "Connect";
	var s1 : GUISkin;//["LoginSkin.guiskin"];
	var connected = "0";
	//var toggle = true;
	//this var below is a testing var
	var photonnetwork : PhotonNetwork;
	
// start of functions - different functions define different behaviours
// function start happens when, and only when the script gets opened	
function Start() {
	// this sets the skin for now
	s1 == "LoginSkin";
	}
	
// function connect is the behaviour function, and is used to handle the connection/disconnection
function Connect()
	{
	// if checks 0, meaning if you're disconnected go and connect
		if (connected =="0")
			{
	
			/*PhotonNetwork.AuthValues = new AuthenticationValues();
			PhotonNetwork.AuthValues.SetAuthParameters(authName, authToken);*/
			PhotonNetwork.ConnectUsingSettings("0.1");
			ConnectButtonText = "Disconnect";
			connected="1";
			}
		else
			{
			// else disconnect, as the button will say disconnect
			Disconnect();
			}
	}
// special UNITY function, calls the window 0 setup
function Window0() {
	authName = GUI.TextField (Rect (windowNickField1, windowNickField2, windowNickField3, windowNickField4), authName, 25);
		
	authToken = GUI.TextField (Rect (windowPassField1, windowPassField2, windowPassField3, windowPassField4), authToken, 25);
	
	
	if (GUI.Button(Rect (windowConnectRect1, windowConnectRect2, windowConnectRect3, windowConnectRect4), ConnectButtonText))
		Connect();

}
// special UNITY function, gets called every tick. Only for GUI calls
function OnGUI() {
	GUI.skin = s1;
	
	(GUI.Window (0, windowRect, Window0, windowTitle));
	if (connected=="1")
		{
		(GUI.Window (1, windowRect2, Window1, windowTitle2));
		}
	}
	
//	special UNITY function, gets called every tick. Calls pretty much everything
function Update() {
	
	if (connected=="1")
		{
			if (ConnectButtonText=="Connect")
				{
					ConnectButtonText="Disconnect";
					Debug.Log("Didn't did this. WTF!");
				}
		}
	else
		{
		if (connected=="0")
			{
				if (connected=="Disconnect")
					{
						ConnectButtonText="Connect";
						Debug.Log("Didn't did this. WTF?");
					}
			}
		else
			{
				Debug.Log("Connected is a not valid pointer.");
			}
		}
}
// special UNITY function, calls the window 1 setup
function Window1() {

	if (GUI.Button(Rect (windowAuthButton1, windowAuthButton2, windowAuthButton3, windowAuthButton4), "Authenticate"))
		Disconnect();
		
	}

// disconnect function. Disconnects and resets state
function Disconnect() {

	PhotonNetwork.Disconnect();
	ConnectButtonText="Connect";
	connected="0";
	}
	
	