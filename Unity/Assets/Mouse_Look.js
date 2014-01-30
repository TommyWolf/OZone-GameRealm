#pragma strict

var rotateSpeed = 5.0;
var hitdist = 28.0;
 
function Update () 
 
{   
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var targetPoint = ray.GetPoint(hitdist);
    var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
 
    transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation,
    rotateSpeed * Time.deltaTime);
}