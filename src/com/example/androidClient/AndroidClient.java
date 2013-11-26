package com.example.androidClient;

import android.os.Bundle;
import org.apache.cordova.*;

public class AndroidClient extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }

}
