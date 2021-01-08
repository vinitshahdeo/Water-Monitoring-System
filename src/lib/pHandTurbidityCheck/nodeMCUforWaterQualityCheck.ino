#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include <SoftwareSerial.h>
#include <SimpleTimer.h>
 
WidgetLCD lcd(V2);
String data;
String I;
char auth[] = "enter_auth";
 
// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "enter_ssid";
char pass[] = "enter_pass";
 
SimpleTimer timer;
 
String myString; // complete message from arduino, which consistors of snesors data
char rdata; // received charactors
 
 
 
// This function sends Arduino's up time every second to Virtual Pin (1).
// In the app, Widget's reading frequency should be set to PUSH. This means
// that you define how often to send data to Blynk App.
void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  Blynk.virtualWrite(V1, millis() / 1000);
  
}
 
 
 
void setup()
{
  // Debug console
  Serial.begin(9600);
 
  Blynk.begin(auth, ssid, pass);
 
    timer.setInterval(1000L,sensorvalue1); 
 
}
 
void loop()
{
 
   if (Serial.available() == 0 ) 
   {
  Blynk.run();
  timer.run(); // Initiates BlynkTimer
   }
   
  if (Serial.available() > 0 ) 
  {
    rdata = Serial.read(); 
    myString = myString+ rdata; 
   Serial.print(rdata);
    if( rdata == '\n')
    {
I = getValue(myString, ',', 0);
  myString = "";
 // Serial.println(I);
lcd.print(0,0,"pH Value:");
    }
  }
 
}
 
 
void sensorvalue1()
{
data = data + I; 
lcd.print(0,0,"pH Value:");
 lcd.print(0,1,data);
 data = "";
 if ((data >6.5) && (data<7.5)) {
    lcd.setCursor(0, 1);
    lcd.print(" its Safe ");
  }
  if ((data > 7.5) && (data < 6.5)) {
    lcd.setCursor(0, 1);
    lcd.print(" its Unsafe ");
  }
  else {
    lcd.setCursor(0, 1);
    lcd.print(" Unknown ");
  }
 
}
 
 
 
String getValue(String data, char separator, int index)
{
    int found = 0;
    int strIndex[] = { 0, -1 };
    int maxIndex = data.length() - 1;
 
    for (int i = 0; i <= maxIndex && found <= index; i++) {
        if (data.charAt(i) == separator || i == maxIndex) {
            found++;
            strIndex[0] = strIndex[1] + 1;
            strIndex[1] = (i == maxIndex) ? i+1 : i;
        }
    }
    return found > index ? data.substring(strIndex[0], strIndex[1]) : "";