#include<LiquidCrystal.h>      //including the inbuilt LCD library

int rs=12, en=11, d4=5, d5=4, d6=3, d7=2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// Motor connections
int en12 = 9, in1 = 8, in2 = 7;


void setup(){
  Serial.begin(9600);
  lcd.begin(16,2);   // 16 columns and 2 rows in the LCD
  
  //Setting pin status
  pinMode (en12, OUTPUT); //Output as arduino is sending out a message
  pinMode (in1, OUTPUT);
  pinMode (in2, OUTPUT);
  pinMode (10, OUTPUT);
  
  //Setting initial motor condition to OFF
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
}

void loop(){
 
  float reading = analogRead(A1);   //Reading will be between 0 and 1023 because of 10 bit ADC 
  float voltage = reading*5/1024;   //Converting reading into voltage from 0-1023 bits to 0-5 V
  Serial.print("Voltage at pin A1 = ");
  Serial.print(voltage);
  Serial.println("V");
  
  //TMP36- 10mV/degCel, 500mV offset
  float celsius = (voltage-0.5)*100;
  //Display on Serial Monitor
  Serial.print("Temperature = ");
  Serial.print((analogRead(A1)*5/1024 - 0.5)*100);
  Serial.println(" Deg Cel");
  
  
  if(celsius > 20){
    digitalWrite(in1 , HIGH);
    digitalWrite(in2 , LOW);
    float read = analogRead(A1);   //Reading will be between 0 and 1023 
      float volt = read*5/1024;   //Converting reading into voltage from 0-1023 bits to 0-5 V
    float cel = (volt-0.5)*100;
    while(cel > 20){
          Serial.println(cel);
        analogWrite(en12 , cel * 2);
          read = analogRead(A1);   //Reading will be between 0 and 1023 
          volt = read*5/1024;   //Converting reading into voltage from 0-1023 bits to 0-5 V
        cel = (volt-0.5)*100;
          digitalWrite(10 , HIGH); 
          //Display on LCD
        lcd.setCursor(0,0);
          lcd.print("T = ");
          lcd.print(cel);
      lcd.print(" Deg Cel");
          lcd.setCursor(0,1);
          lcd.print("Speed = ");
        lcd.print((cel * 118)/105);
          lcd.print(" Rpm");
    }
    digitalWrite(10 , LOW);  
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("T = ");
    lcd.print(cel);
    lcd.print(" Deg Cel");
    lcd.setCursor(0,1);
    lcd.print("Speed = ");
    lcd.print(0);
    lcd.print(" Rpm");
    
    digitalWrite(in1 , LOW);
    digitalWrite(in2 , LOW);
}
  else{
    digitalWrite(10 , LOW);
    float read = analogRead(A1);   //Reading will be between 0 and 1023
    float volt = read*5/1024;   //Converting reading into voltage from 0-1023 bits to 0-5 V
    float cel = (volt-0.5)*100;
    analogWrite(en12 , 0);
    digitalWrite(in1 , LOW);
    digitalWrite(in2 , LOW);
    lcd.clear();    // Clear LCD after every reading
    lcd.setCursor(0,0);
    lcd.print("T = ");
      lcd.print(cel);
      lcd.print(" Deg Cel");
    lcd.setCursor(0,1);
      lcd.print("Speed = ");
    lcd.print(0);
      lcd.print(" Rpm");
}
  
  delay(1000);
}