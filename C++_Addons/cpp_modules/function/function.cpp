#include "function.h"

using namespace Napi;

// Value SumNumbers(const CallbackInfo& info) {
//   Env env = info.Env();
//   if(info.Length() < 2) {
//     Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
//     return env.Null();
//   }

//   if(!info[0].IsNumber() || !info[1].IsNumber()) {
//     Napi::TypeError::New(env, "Wrong type of argument").ThrowAsJavaScriptException();
//     return env.Null();
//   }

//   double num1 = info[0].As<Number>().DoubleValue();
//   double num2 = info[1].As<Number>().DoubleValue();
//   Number num = Number::New(env, num1 + num2);
//   return num;
// }

Napi::Value SumNumbers(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 2) {
    Napi::TypeError::New(env, "Wrong number of arguments")
        .ThrowAsJavaScriptException();
    return env.Null();
  }

  if (!info[0].IsNumber() || !info[1].IsNumber()) {
    Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
    return env.Null();
  }

  double arg0 = info[0].As<Napi::Number>().DoubleValue();
  double arg1 = info[1].As<Napi::Number>().DoubleValue();
  Napi::Number num = Napi::Number::New(env, arg0 + arg1);

  return num;
}