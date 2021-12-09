# Dealing with memory leaks in Node.js


## How node.js manages memory

The V8 engine automatically allocates space in a memory segment call "Heap" and frees it using garbage collector.

### Allocation


### Dealocation


## Monitoring and debugging tools

From the most basic to the most powerful

### 1. built in `process.memoryUsage()`

* `rss` = Resident Set Size = all memory consumed by node (including the heap and also any native objects)
* `heapTotal` = how much heap space node has currently allocated
* `heapUsed` = how much heap space is actually being used to stored javascript objects at the moment
* `external` = 
* `arrayBuffers` = 

You can use the [memory-usage] npm package to chart that in a graph.

### 2. `node-inspect` and chrome dev tools

* Ability to import/export snapshots


## Debugging in production environment

Running `node --inspect` in production is... brave.
 - heavy performance impact
 - security implications (`node --inspect` only binds to 127.0.0.1 by default, which is a good thing, never expose 
   the inspector adress publicly, use ssh tunnel [remote-debugging])
   



[remote-debugging] https://nodejs.org/en/docs/guides/debugging-getting-started/#enabling-remote-debugging-scenarios