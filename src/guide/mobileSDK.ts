import { Guide } from './_types';

export const mobileSDK: Guide = {
  id: 'mobile-checkout-sdk',
  title: 'Mobile Checkout SDK',
  description: [
    `{app_name}'s Sdk React Native Implementation
       To implement the EasyMerchantSdk in your React Native App project. Follow the below steps: `,
  ],
  defaultOpen: true,
  content: [
    {
      id: 'add-sdk-path',
      title: 'Add the sdk path in your project.',
      description: [
        {
          paragraph: `To add the path of sdk in your project. Open your package.json file and inside the dependencies section, add the below code and set the path of the sdk where you store on your disk.`,
          snippet:
            `"dependencies": {
          ...
          "easymerchantsdk-react-native": "^1.0.0"
          },`
        },
        {
          paragraph: `or using command`,
          snippet: 'npm i easymerchantsdk-react-native',
        }
      ],
    },
    {
      id: 'changes-android-side',
      title: 'Changes in android side',
      description: [
        {
          paragraph: `Now open your android folder and there is a build.gradle file. Open it and add the below code in it.`,
          snippet: `allprojects {
    repositories {
                google()
                mavenCentral()
                maven { url 'https://jitpack.io' }
                maven {
                    url = uri("https://maven.pkg.github.com/EasyMerchant/em-MobileCheckoutSDK-Android")
                    credentials {
                        username = "EasyMerchant"
                        password = ""
                    }
                }
            }
          }`
        },
      ],
    },
    {
      id: 'hanges-ios-side',
      title: 'Changes in IOS side',
      description: [
        {
          paragraph: "Add below content inside the AppDelegate.swift File :- Create a new file named AppDelegate.swift",
          snippet: `
          import UIKit
import easymerchantsdk
import React

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
var window: UIWindow?

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
    ) -> Bool {
        let jsCodeLocation: URL

        #if DEBUG
        jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
        #else
        jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle")!
        #endif

        let bridge = RCTBridge(
            bundleURL: jsCodeLocation,
            moduleProvider: nil,
            launchOptions: launchOptions
        )

        guard let validBridge = bridge else {
            fatalError("React Native bridge failed to initialize.")
        }

        let rootView = RCTRootView(
            bridge: validBridge,
            moduleName: "EasyMerchantTestApp",    // replace it with your app name
            initialProperties: nil
        )

        self.window = UIWindow(frame: UIScreen.main.bounds)
        let rootViewController = UIViewController()
        rootViewController.view = rootView
        self.window?.rootViewController = rootViewController
        self.window?.makeKeyAndVisible()
      
      if let easyMerchantSdkPlugin = bridge?.module(for: EasyMerchantSdkPlugin.self) as? EasyMerchantSdkPlugin {
            easyMerchantSdkPlugin.setViewController(rootViewController)
        } else {
            print("Failed to retrieve EasyMerchantSdkPlugin instance from React Native bridge.")
        }
        return true
    }
}
          `
        },

        {
          paragraph: 'inside the PodFile add below',
          snippet: `
            
  require_relative '../node_modules/react-native/scripts/react_native_pods'
  require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'

  platform :ios, 16.0
  
  pod 'easymerchantsdk', :path => '../node_modules/easymerchantsdk-react-native/ios'           
            `
        },
      ]
    },
    {
      id: 'call-sdk-app',
      title: 'How to call the sdk in App.js',
      description: [
        {
          paragraph: 'you can call the sdk using below example:',
          snippet: `
          import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, NativeModules, Platform } from 'react-native';

const { RNEasymerchantsdk, EasyMerchantSdk } = NativeModules;

const App = () => {
  const [version, setVersion] = useState('');
  const [paymentResponse, setPaymentResponse] = useState('');
  const [billingResult, setBillingResult] = useState('');

  const getPlatformVersion = async () => {
    try {
      if (Platform.OS === 'android') {
        const platformVersion = await RNEasymerchantsdk.platformVersion();
        setVersion(platformVersion);
      } else if (Platform.OS === 'ios') {
        const version = await EasyMerchantSdk.getPlatformVersion();
        setVersion(version);
      }
    } catch (error) {
      setVersion('Error fetching version');
    }
  };

  const handleBilling = async () => {
    const amount = '100';
    const additionalInfoRequest = {
      name: "Test User",
      email: "test@gmail.com",
      phone_number: "9465351125",
      country_code: "91",
      description: "Test"
    };

    const json = {
      address: "Mohali, Punjab",
      country: "India",
      state: "Punjab",
      city: "Anandpur Sahib",
      postal_code: "140118",
      additional_info: additionalInfoRequest
    };

    const jsonString = JSON.stringify(json);

    try {
      if (Platform.OS === 'android') {
//        const response = await RNEasymerchantsdk.billing(amount, null,'staging','mobilesdk1980IUuCzwWl','mobilesdk1980LVHnN0Oh');
        const response = await RNEasymerchantsdk.billing(amount, null,'sandbox','f149cf5afc3a67c79e0aa87e7','22b9dd1e588146077ca77da82');
        setPaymentResponse('Payment Success: ${'response'}');
      } else if (Platform.OS === 'ios') {
        const result = await EasyMerchantSdk.billing(amount, jsonString,'staging','mobilesdk1980IUuCzwWl','mobilesdk1980LVHnN0Oh');
//        const result = await EasyMerchantSdk.billing(amount, jsonString,'sandbox','f149cf5afc3a67c79e0aa87e7','22b9dd1e588146077ca77da82');
        setBillingResult('Billing Success: ${'result'}');
      }
    } catch (error) {
      if (Platform.OS === 'android') {
        setPaymentResponse('Payment Error: ${'error'}');
      } else if (Platform.OS === 'ios') {
        setBillingResult('Billing Error: ${'error.message || error'}');
      }
    }
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const initializeViewController = async () => {
        if (EasyMerchantSdk && EasyMerchantSdk.setViewController) {
          try {
            await EasyMerchantSdk.setViewController();
            console.log('ViewController set successfully');
          } catch (error) {
            console.error('Error setting ViewController:', error.message || error);
          }
        } else {
          console.warn('EasyMerchantSdk.setViewController is not available');
        }
      };

      initializeViewController();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Platform Version: {version}</Text>
      <Button title="Get Platform Version" onPress={getPlatformVersion} />

      <Button title="Make Payment" onPress={handleBilling} />

      {paymentResponse && <Text>{paymentResponse}</Text>}
      {billingResult && <Text>{billingResult}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;`
        },
        {
          paragraph: 'You can send null if billing info not available.',
        }
      ]
    },    
  ],
};
