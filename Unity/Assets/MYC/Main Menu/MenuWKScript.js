﻿	public var facebookUser : String = "Enter your FB Login";
	public var facebookAuth : String = "Enter your FB Password";
	public var windowTitle = "Connect to Master";
	public var windowRect1 = 30;
	public var windowRect2 = 30;
	public var windowRect3 = 120;
	public var windowRect4 = 50;
	public var windowRect : Rect = Rect (windowRect1, windowRect2, windowRect3, windowRect4);
	// vars with hide don't show up in inspector. at least thats the plan.
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
	public var ConnectButtonText = "Connect";

	function Window0() {
	facebookUser = GUI.TextField (Rect (windowNickField1, windowNickField2, windowNickField3, windowNickField4), facebookUser, 25);
	facebookAuth = GUI.TextField (Rect (windowPassField1, windowPassField2, windowPassField3, windowPassField4), facebookAuth, 25);
	
	
	if (GUI.Button(Rect (windowConnectRect1, windowConnectRect2, windowConnectRect3, windowConnectRect4), ConnectButtonText))
		Debug.Log(facebookUser);

}
function OnGUI() {
	
	(GUI.Window (0, windowRect, Window0, windowTitle));
	
	}