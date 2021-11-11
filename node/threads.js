// The event loop uses a single thread, but a lot of code that you and i write, does not actually executed inside that thread entirely
// for some standard library function calls the node C++ side 'LIBUV' decide to do expansive calculations outside of event loop entirely,
// instead, they make  us of something called a thread pool
// the thread pool is a series of four threads that can be used for running computationally intensive tasks
// what functions in node std library use the threadpool (all 'fs' modules functions, some crypto stuff. Depends on OS )
// change the thrad pool size of LIBUV
// tasks running in threadpoo are the 'pendingOperations'
console.log(__filename)