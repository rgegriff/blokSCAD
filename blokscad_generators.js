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
    var center = value_center == ""? checkbox_center : value_center;
    // TODO: Assemble JavaScript into code variable
    return 'square({size: ['+ width +', '+ height +'], center:'+ center + '});\n';
};

Blockly.JavaScript['blokscad_circle'] = function(block) {
    var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
    var value_center = Blockly.JavaScript.valueToCode(block, 'center', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable
    var code = 'circle({r:'+ value_radius +', center:'+ value_center + '})';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blokscad_union'] = function(block) {
    var statements_to_union = Blockly.JavaScript.statementToCode(block, 'to_union');
    // TODO: Assemble JavaScript into code variable.

    statements_to_union = statements_to_union.split(';\n');
    statements_to_union = statements_to_union.map(function(a){return a.trim();});
    statements_to_union = statements_to_union.filter(function (a){return a!=""});

    statements_to_union = statements_to_union.join(", ");
    var code = 'union('+ statements_to_union +');\n';
    return code;
};

Blockly.JavaScript['blokscad_difference'] = function(block) {
    var statements_to_union = Blockly.JavaScript.statementToCode(block, 'to_difference');
    // TODO: Assemble JavaScript into code variable.

    statements_to_union = statements_to_union.split(';\n');
    statements_to_union = statements_to_union.map(function(a){return a.trim();});
    statements_to_union = statements_to_union.filter(function (a){return a!=""});

    statements_to_union = statements_to_union.join(", ");
    var code = 'difference('+ statements_to_union +');\n';
    return code;
};

Blockly.JavaScript['blokscad_intersection'] = function(block) {
    var statements_to_union = Blockly.JavaScript.statementToCode(block, 'to_intersection');
    // TODO: Assemble JavaScript into code variable.

    statements_to_union = statements_to_union.split(';\n');
    statements_to_union = statements_to_union.map(function(a){return a.trim();});
    statements_to_union = statements_to_union.filter(function (a){return a!=""});

    statements_to_union = statements_to_union.join(", ");
    var code = 'intersection('+ statements_to_union +');\n';
    return code;
};

Blockly.JavaScript['blokscad_translate3d'] = function(block) {
    var number_x = block.getFieldValue('x');
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var number_y = block.getFieldValue('y');
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var number_z = block.getFieldValue('z');
    var value_z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC);

    //Collect whichever variable the user has set
    var x = value_x == ""? number_x : value_x;
    var y = value_y == ""? number_y : value_y;
    var z = value_z == ""? number_z : value_z;


    var statements_shape = Blockly.JavaScript.statementToCode(block, 'Shape');
    var shape_code = statements_shape
        .split(';\n')
        .map(function(a){return a.trim();})
        .filter(function (a){return a!=""});
    // TODO: Assemble JavaScript into code variable.
    var code = 'translate([' + x + ', ' + y + ', ' + z + '], ' + shape_code + ');\n';
    return code;
};

Blockly.JavaScript['blokscad_translate2d'] = function(block) {
    var number_x = block.getFieldValue('x');
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var number_y = block.getFieldValue('y');
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

    //Collect whichever variable the user has set
    var x = value_x == ""? number_x : value_x;
    var y = value_y == ""? number_y : value_y;

    var statements_shape = Blockly.JavaScript.statementToCode(block, 'Shape');
    var shape_code = statements_shape
        .split(';\n')
        .map(function(a){return a.trim();})
        .filter(function (a){return a!="";});
    // TODO: Assemble JavaScript into code variable.
    var code = 'translate([' + x + ', ' + y + ', ' + 0 + '], ' + shape_code + ');\n';
    return code;
};

Blockly.JavaScript['blokscad_rotate2d'] = function(block) {
    var number_degrees = block.getFieldValue('degrees');
    var value_degrees = Blockly.JavaScript.valueToCode(block, 'degrees', Blockly.JavaScript.ORDER_ATOMIC);

    //Collect whichever variable the user has set
    var degrees = value_degrees  == ""? number_degrees : value_degrees ;

    var statements_shape = Blockly.JavaScript.statementToCode(block, 'Shape');
    var shape_code = statements_shape
        .split(';\n')
        .map(function(a){return a.trim();})
        .filter(function (a){return a!="";});
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotate([' + 0 + ', ' + 0 + ', ' + degrees + '], ' + shape_code + ');\n';
    return code;
};

Blockly.JavaScript['blokscad_polygon'] = function(block) {
    var value_points = Blockly.JavaScript.valueToCode(block, 'POINTS', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'polygon(' + value_points + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blokscad_polygon_point'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

    //Collect whichever variable the user has set
    // TODO: Assemble JavaScript into code variable.
    var code = "["+value_x+","+value_y+"]";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blokscad_sphere'] = function(block) {
    var number_radius = block.getFieldValue('RADIUS');
    var value_radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
    var checkbox_centered = block.getFieldValue('CENTERED') == 'TRUE';
    var value_centered = Blockly.JavaScript.valueToCode(block, 'CENTERED', Blockly.JavaScript.ORDER_ATOMIC);

    var radius = value_radius == ""? number_radius : value_radius;
    var centered = value_centered == ""? checkbox_centered : value_centered;

    // TODO: Assemble JavaScript into code variable.
    var options = "{r: "+radius+", center:"+centered+"}";
    var code = 'sphere(' + options + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blokscad_box'] = function(block) {
    var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
    var value_depth = Blockly.JavaScript.valueToCode(block, 'DEPTH', Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
    var value_centered = Blockly.JavaScript.valueToCode(block, 'CENTERED', Blockly.JavaScript.ORDER_ATOMIC);
    value_centered = value_centered == "true";
    var options = "{size: ["+value_width+", "+value_depth+","+value_height+"], center:"+value_centered+"}";
    // TODO: Assemble JavaScript into code variable.
    var code = 'cube('+ options +')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

// New transforms
Blockly.JavaScript['blokscad_difference_new'] = function(block) {
    var subtrahend = Blockly.JavaScript.valueToCode(block, 'SUBTRAHEND', Blockly.JavaScript.ORDER_ATOMIC);
    var minuend = Blockly.JavaScript.valueToCode(block, 'MINUEND', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'difference(' + subtrahend + ', ' + minuend + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blokscad_union_new'] = function(block) {
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
                Blockly.JavaScript.ORDER_COMMA) || 'null';
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'union(' + elements.join(", ") + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blokscad_intersect_new'] = function(block) {
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
                Blockly.JavaScript.ORDER_COMMA) || 'null';
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'intersection(' + elements.join(", ") + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blokscad_translate3d_new'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC);

    var translation_vect = '['+value_x+', '+value_y+', '+value_z+']';
    var value_to_translate = Blockly.JavaScript.valueToCode(block, 'TO_TRANSLATE', Blockly.JavaScript.ORDER_ATOMIC);


    // TODO: Assemble JavaScript into code variable.
    var code = 'translate('+ translation_vect +', '+ value_to_translate +')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blokscad_rotate3d_new'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_to_rotate = Blockly.JavaScript.valueToCode(block, 'TO_ROTATE', Blockly.JavaScript.ORDER_ATOMIC);

    var rotation_vect = "[" + value_x + ", " + value_y +", "+ value_z +"]";

    // TODO: Assemble JavaScript into code variable.
    var code = 'rotate('+rotation_vect+','+value_to_rotate+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};