{
    "targets": [{
        "target_name": "testaddon",
        "cflags!": [ "-fno-exceptions" ],
        "cflags_cc!": [ "-fno-exceptions" ],
        "sources": [
            "cpp_modules/main.cpp",
            "cpp_modules/hello/hello.h",
            "cpp_modules/hello/hello.cpp",
            "cpp_modules/function/function.h",
            "cpp_modules/function/function.cpp",
            "cpp_modules/arrayFunction/arrayFunction.h",
            "cpp_modules/arrayFunction/arrayFunction.cpp",
        ],
        'include_dirs': [
            "<!@(node -p \"require('node-addon-api').include\")"
        ],
        'libraries': [],
        'dependencies': [
            "<!(node -p \"require('node-addon-api').gyp\")"
        ],
        'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ]
    }]
}