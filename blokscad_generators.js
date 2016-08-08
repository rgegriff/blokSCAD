/**
 * Created by george on 8/7/16.
 */
Blockly.JavaScript['blokscad_square'] = function(block) {
    var number_width = block.getFieldValue('width');
    var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
    var number_height = block.getFieldValue('height');
    var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
    var checkbox_center = block.getFieldValue('center') == 'TRUE';
    var value_center = Blockly.JavaScript.valueToCode(block, 'center', Blockly.JavaScript.ORDER_ATOMIC);
    var width = value_width == ""? number_width : value_width;
    var height = value_height == ""? number_height : value_height;
    var center = value_width == ""? checkbox_center : value_center;
    // TODO: Assemble JavaScript into code variable.
    var code = 'square({size: ['+ width +', '+ height +'], center:'+ center + '})';
    return code;
};

Blockly.JavaScript['blokscad_union'] = function(block) {
    var statements_to_union = Blockly.JavaScript.statementToCode(block, 'to_union');
    // TODO: Assemble JavaScript into code variable.
    
    statements_to_union = statements_to_union.split('\n');
    statements_to_union = statements_to_union.map(function(a){return a.trim();});
    statements_to_union = statements_to_union.join(", ");
    var code = 'union('+ statements_to_union +')';
    return code;
};