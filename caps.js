module.exports = {
  shs: Buffer.from('P6EGPtCNW7irtdeIk+vRVzVbWOlctUKJuce1IZkO2N4=', 'base64')
    //this is the key for accessing the ssb protocol.
    //this will be updated whenever breaking changes are made.
    //(see secret-handshake paper for a full explaination)

    //there is nothing special about this value.
    //I generated it in the node repl with:
    //
    // > crypto.randomBytes(32).toString('base64')
    //
    //and copied it here.

}


