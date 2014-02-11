	public var EditedNick : String = "Enter your ingame name";
	public var windowTitle = "Connect to Master";
	public var windowRect1 = 30;
	public var windowRect2 = 30;
	public var windowRect3 = 120;
	public var windowRect4 = 50;
	public var windowRect : Rect = Rect (windowRect1, windowRect2, windowRect3, windowRect4);
	public var windowNickField1 = 10;
	public var windowNickField2 = 15;
	public var windowNickField3 = 110;
	public var windowNickField4 = 40;
	public var windowConnectRect1 = 20;
	public var windowConnectRect2 = 20;
	public var windowConnectRect3 = 90;
	public var windowConnectRect4 = 35;
	public var ConnectButtonText = "Connect";

function OnGUI() {
	// window regist, allown changing
	GUI.Window (0, windowRect, WindowDraw, windowTitle);
	}
	
function WindowDraw (windowID : int) {
	EditedNick = GUI.TextField (Rect (windowNickField1, windowNickField2, windowNickField3, windowNickField4), EditedNick, 25);
	
	if(GUI.Button(Rect (windowConnectRect1, windowConnectRect2, windowConnectRect3, windowConnectRect4), ConnectButtonText))
		Debug.Log("Connection ready");
		Debug.Log(EditedNick);
		
}