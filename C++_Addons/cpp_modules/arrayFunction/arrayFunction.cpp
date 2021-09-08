#include "arrayFunction.h"
#include <math.h>

using namespace Napi;

Array SquareItems(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    Array inputArr = info[0].As<Array>();
    unsigned int inputArrLength = inputArr.Length();
    Array outputArr = Array::New(env, inputArrLength);
    unsigned int i = 0;
    for(i = 0; i < inputArrLength; i++) {
        Napi::Value inputArrValue = inputArr[i];
        double resultValue = inputArrValue.As<Napi::Number>().DoubleValue();
        resultValue = pow(resultValue, 2);
        // double result = arr[i];
        outputArr[i] = Number::New(env, resultValue);
    }

    return outputArr;
}

void ArraySwap(double *xp, double *yp) 
{ 
    double temp = *xp; 
    *xp = *yp; 
    *yp = temp; 
}

void BubbleSortImpl(double* arr, int len) {
    int i, j;
    bool isSwapped = false;
    for(i = 0; i < len - 1; i++) {
        isSwapped = false;
        for(j = 0; j < (len-i-1); j++) {
            if(arr[j] > arr[j+1]) {
                ArraySwap(&arr[j], &arr[j+1]);
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
}

Array BubbleSort(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    Array inputArr = info[0].As<Array>();
    int inputArrLength = inputArr.Length();
    Array outputArr = Array::New(env, inputArrLength);
    double* arrayCPP = new double[inputArrLength];
    int i;

    for (i = 0; i < inputArrLength; i++) {
        Value inputArrValue = inputArr[i];
        arrayCPP[i] = inputArrValue.ToNumber().DoubleValue();
    }

    BubbleSortImpl(arrayCPP, inputArrLength);

    for (i = 0; i < inputArrLength; i++) {
        outputArr[i] = Number::New(env, arrayCPP[i]);
    }

    return outputArr; 
}