/*
To use the timer wake up with ESP8266, we need to connect the RST pin to GPIO 16 which is labeled as D0, in a NodeMCU board
Code to be uploaded to ESP866
 */
 
void setup() {
  Serial.begin(115200);
  Serial.setTimeout(2000);

  // Wait for serial to initialize.
  while(!Serial) { }
  
  // Deep sleep mode for 30 seconds, the ESP8266 wakes up by itself when GPIO 16 (D0 in NodeMCU board) is connected to the RESET pin, the time can be changed as required
  Serial.println("I'm awake, but I'm going into deep sleep mode for 30 seconds");
  ESP.deepSleep(30e6); //30e6 corresponds to 30000000 microseconds which is equal to 30 seconds.
  
  // Deep sleep mode until RESET pin is connected to a LOW signal
  //Serial.println("I'm awake, but I'm going into deep sleep mode until RESET pin is connected to a LOW signal");

}

void loop() {
}
