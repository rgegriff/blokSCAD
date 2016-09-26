/**
 * Created by george on 8/7/16.
 */

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wr9mgd
Blockly.Blocks['blokscad_square'] = {
    init: function() {
        this.appendValueInput("width")
            .setCheck("Number")
            .appendField("Square")
            .appendField("width");
        this.appendValueInput("height")
            .setCheck("Number")
            .appendField("height");
        this.appendValueInput("center")
            .setCheck("Boolean")
            .appendField("Centered");
        this.setInputsInline(true);
        this.setOutput(true, "Shape");
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
            .appendField("radius");
        this.appendValueInput("center")
            .setCheck("Boolean")
            .appendField("Centered");
        this.setInputsInline(true);
        this.setOutput(true, "Shape");
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
        this.setOutput(true, "Shape");
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
            .appendField("Radius");
        this.appendValueInput("CENTERED")
            .setCheck("Boolean")
            .appendField("Center");
        this.setInputsInline(true);
        this.setOutput(true, "Shape");
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


// New Transforms

Blockly.Blocks['blokscad_create_with_item'] = {
    /**
     * Mutator bolck for adding items.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(Blockly.Blocks.lists.HUE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField("Shape");
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['blokscad_create_with_container'] = {
    /**
     * Mutator block for list container.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(Blockly.Blocks.lists.HUE);
        this.appendDummyInput()
            .appendField("Shapes");
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['blokscad_union_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Union");
        this.setInputsInline(false);
        this.itemCount_= 2;
        this.updateShape_();
        this.setOutput(true, "Shape");
        this.setColour(0);
        this.setTooltip('');
        this.setMutator(new Blockly.Mutator(['blokscad_create_with_item']));
        this.setHelpUrl('http://www.example.com/');
    },
   /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('blokscad_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('blokscad_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField("use option menu on this block to add slots");
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          input.appendField("Shapes");
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['blokscad_intersect_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Intersection");
        this.appendValueInput("TO_INTERSECT")
            .setCheck(["Array", "Shape"]);
        this.setInputsInline(false);
        this.setOutput(true, "Shape");
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_difference_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Difference");
        this.appendValueInput("SUBTRAHEND")
            .appendField("Subtrahend")
            .setCheck(["Array", "Shape"]);
        this.appendValueInput("MINUEND")
            .appendField("Minuend")
            .setCheck(["Array", "Shape"]);
        this.setInputsInline(false);
        this.setOutput(true, "Shape");
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_translate3d_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Translate 3D");
        this.appendValueInput("X")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X");
        this.appendValueInput("Y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.appendValueInput("Z")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z");
        this.appendValueInput("TO_TRANSLATE")
            .setCheck("Shape")
            .appendField("Shape");
        this.setOutput(true, "Shape");
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['blokscad_rotate3d_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Rotate 3D");
        this.appendValueInput("X")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X")
        this.appendValueInput("Y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y")
        this.appendValueInput("Z")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z")
        this.appendValueInput("TO_ROTATE")
            .setCheck("Shape")
            .appendField("Shape");
        this.setInputsInline(false);
        this.setOutput(true, "Shape");
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Blocks['blokscad_box'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Box");
        this.appendValueInput("WIDTH")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Width");
        this.appendValueInput("DEPTH")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Depth");
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Height");
        this.appendValueInput("CENTERED")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Centered");
        this.setInputsInline(true);
        this.setOutput(true, "Shape");
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

