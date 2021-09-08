#include "./hello/hello.h"
#include "./function/function.h"
#include "./arrayFunction/arrayFunction.h"

using namespace Napi;

Object Init(Env env, Object exports) {
  exports.Set(String::New(env, "hello"), Function::New(env, Method));
  exports.Set(String::New(env, "sum"), Function::New(env, SumNumbers));   
  exports.Set(String::New(env, "SquareItems"), Function::New(env, SquareItems));
  exports.Set(String::New(env, "BubbleSort"), Function::New(env, BubbleSort));   
  return exports;
}

NODE_API_MODULE(function, Init)