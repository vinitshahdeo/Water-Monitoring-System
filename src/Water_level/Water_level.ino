#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>
#include <DateTime.h>

const int VAL_PROBE1 = A0;
const int VAL_PROBE2 = A1;
const int VAL_PROBE3 = A2;
const int VAL_PROBE4 = A3;// Analog pin 0
const int WATER_LEVEL = 850; 

#define FIREBASE_HOST "*******************"
#define FIREBASE_AUTH "*************"
#define WIFI_SSID "*********"
#define WIFI_PASSWORD "**********"

FirebaseData firebaseData;

void setup()
{
 Serial.begin(115200);
Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.reconnectWiFi(true);
}

void loop()
{ 
  
  int val1 = analogRead(VAL_PROBE1);
  int val2 = analogRead(VAL_PROBE2);
  int val3 = analogRead(VAL_PROBE3);
  int val4 = analogRead(VAL_PROBE4);

  Firebase.setInt("WaterLevel1",val1);
  Firebase.setInt("WaterLevel2",val2);
  Firebase.setInt("WaterLevel3",val3);
  Firebase.setInt("WaterLevel4",val4);
  
 delay(3000);    
}
