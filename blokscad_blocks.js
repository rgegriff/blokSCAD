/**
 * Created by george on 8/7/16.
 */

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wr9mgd
Blockly.Blocks['blokscad_square'] = {
    init: function() {
        this.appendValueInput("width")
            .setCheck("Number")
            .appendField("Square")
            .appendField("width")
            .appendField(new Blockly.FieldNumber(0), "width");
        this.appendValueInput("height")
            .setCheck("Number")
            .appendField("height")
            .appendField(new Blockly.FieldNumber(0), "height");
        this.appendValueInput("center")
            .setCheck("Boolean")
            .appendField("Centered?")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "center");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('The Square, Circle\'s greatest enemy.');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_circle'] = {
    init: function() {
        this.appendValueInput("radius")
            .setCheck("Number")
            .appendField("Circle")
            .appendField("radius")
            .appendField(new Blockly.FieldNumber(0), "radius");
        this.appendValueInput("center")
            .setCheck("Boolean")
            .appendField("Centered?")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "center");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('Circle Loves Turtles');
        this.setHelpUrl('http://www.example.com/');
    }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#djgwvg
Blockly.Blocks['blokscad_union'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Union");
        this.appendStatementInput("to_union")
            .setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('A marriage between one or more different (or same! Love\'s love, baby; We don\'t judge!) shapes');
        this.setHelpUrl('http://www.example.com/')
    }
};

Blockly.Blocks['blokscad_difference'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Difference");
        this.appendStatementInput("to_difference")
            .setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Subtract some shapes from each other. Any space shared by all the shapes will be subtracted');
        this.setHelpUrl('http://www.example.com/')
    }
};

Blockly.Blocks['blokscad_intersection'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Intersection");
        this.appendStatementInput("to_intersection")
            .setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Only show the spots that all the shapes share');
        this.setHelpUrl('http://www.example.com/')
    }
};

Blockly.Blocks['blokscad_translate3d'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Translate 3D");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("X")
            .appendField(new Blockly.FieldNumber(0), "x");
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField("Y")
            .appendField(new Blockly.FieldNumber(0), "y");
        this.appendValueInput("Z")
            .setCheck("Number")
            .appendField("Z")
            .appendField(new Blockly.FieldNumber(0), "z");
        this.appendStatementInput("Shape")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_translate2d'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Translate 2D");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("X")
            .appendField(new Blockly.FieldNumber(0), "x");
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField("Y")
            .appendField(new Blockly.FieldNumber(0), "y");
        this.appendStatementInput("Shape")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_rotate2d'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Rotate 2D");
        this.appendValueInput("degrees")
            .setCheck("Number")
            .appendField("degrees")
            .appendField(new Blockly.FieldNumber(0), "degrees");
        this.appendStatementInput("Shape")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_polygon'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Polygon");
        this.appendValueInput("POINTS")
            .setCheck("Array")
            .appendField("Point List");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_polygon_point'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Polygon Point");
        this.appendValueInput("X")
            .setCheck("Number")
            .appendField("X")
            .appendField(new Blockly.FieldNumber(0), "X");
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField("Y")
            .appendField(new Blockly.FieldNumber(0), "Y");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_sphere'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Sphere");
        this.appendValueInput("RADIUS")
            .setCheck("Number")
            .appendField("Radius")
            .appendField(new Blockly.FieldNumber(0), "RADIUS");
        this.appendValueInput("CENTERED")
            .setCheck("Boolean")
            .appendField("Center")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "CENTERED");
        this.setInputsInline(true);
        this.setOutput(true, "Shape");
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};