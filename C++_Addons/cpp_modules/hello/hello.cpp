// #include <napi.h>

// using namespace Napi;

// String Method(const CallbackInfo& info) {
//   Env env = info.Env();
//   return String::New(env, "world");
// }

// Object Init(Env env, Object exports) {
//   exports.Set(String::New(env, "hello"),
//               Function::New(env, Method));
//   return exports;
// }

// NODE_API_MODULE(hello, Init)

#include "hello.h"

using namespace Napi;

String Method(const CallbackInfo& info) {
  Env env = info.Env();
  return String::New(env, "world");
}