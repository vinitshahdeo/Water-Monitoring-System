#define trigPin 8 //ultrasonic sensor
#define echoPin 9
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
int BUZZER = 10 ;

void setup(){
      int duration,distance,percentage,heightTank;
      Serial.begin (9600);
      pinMode(trigPin,OUTPUT);
      pinMode(echoPin,INPUT);
      lcd.begin(16,2);
      lcd.print("HELLO");
        pinMode(BUZZER,OUTPUT);
}

void loop(){
      int duration,distance,percentage,heightTank,deviation;
      // We can change the next 2 lines.
      // The first one is the max. level of the water.
      // The next one is how high the sensor is above that max. level.
      heightTank=65;
      deviation=4;

      digitalWrite(trigPin,HIGH);
      delayMicroseconds(1000);
      digitalWrite(trigPin,LOW);
      duration=pulseIn(echoPin,HIGH);
      distance=(duration/2)/29.1;
      percentage=100-(((distance-deviation)*100)/heightTank);
      Serial.println(distance);
      Serial.println(percentage);
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Current tank");
      //lcd.print(distance);
      //lcd.print(" cm");
      lcd.setCursor(0,1);
      lcd.print("level: ");
      lcd.print(percentage);
      lcd.print(" %");
      delay(1000);

      digitalWrite(BUZZER,HIGH);
     static unsigned long lastBuzzer = 0;

      if(percentage > 99 && lastBuzzer == 0) {
      lastBuzzer = millis();
}

      if(percentage > 99) {
      if(millis() - lastBuzzer < 15000L) {
        digitalWrite(BUZZER,HIGH);
        delay(100);
        digitalWrite(BUZZER,LOW);
        delay(100);
    }
}      else  {
       digitalWrite(BUZZER,LOW);
       lastBuzzer = 0;
}
  }
