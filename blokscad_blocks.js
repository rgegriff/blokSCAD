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

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#djgwvg
Blockly.Blocks['blokscad_union'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Union");
        this.appendStatementInput("to_union")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('A marrage between one or more different (or same! Love\'s love, baby; We don\'t judge!) shapes');
        this.setHelpUrl('http://www.example.com/')
    }
};