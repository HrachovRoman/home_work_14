function padString( line, lineLength, fillСharacter, blnParam = true ) {
    
    const lineResult = line.substring( 0, lineLength );
    
    if ( typeof line !== 'string' || line.length === null || line === "" ) 
        return 'arg1 is invalid';
    if ( lineLength.length === null || lineLength === "" || isNaN(lineLength) ) 
        return 'arg2 is invalid';

    if ( lineLength <= line.length ) return lineResult;
    
    if ( blnParam === true ) {
        const lineLeft = lineResult + fillСharacter.repeat( lineLength - lineResult.length );
        return lineLeft;
    } else {
        const lineRight = fillСharacter.repeat( lineLength - lineResult.length ) + lineResult;
        return lineRight;
    }                
}
console.log( padString( 'hello', 8, '*' ) );
console.log( padString( 'hello', 6, '*', false ) );
console.log( padString( 'hello', 2 ) );