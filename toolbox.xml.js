var toolbox_xml = "\
<xml id=\"toolbox\" style=\"display: none\">\
    <category name=\"Logic\">\
        <category name=\"If\">\
            <block type=\"controls_if\"></block>\
            <block type=\"controls_if\">\
                <mutation else=\"1\"></mutation>\
            </block>\
            <block type=\"controls_if\">\
                <mutation elseif=\"1\" else=\"1\"></mutation>\
            </block>\
        </category>\
        <category name=\"Boolean\">\
            <block type=\"logic_compare\"></block>\
            <block type=\"logic_operation\"></block>\
            <block type=\"logic_negate\"></block>\
            <block type=\"logic_boolean\"></block>\
            <block type=\"logic_null\"></block>\
            <block type=\"logic_ternary\"></block>\
        </category>\
    </category>\
    <category name=\"Loops\">\
        <block type=\"controls_repeat_ext\">\
            <value name=\"TIMES\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">10</field>\
                </block>\
            </value>\
        </block>\
        <block type=\"controls_whileUntil\"></block>\
        <block type=\"controls_for\">\
            <field name=\"VAR\">i</field>\
            <value name=\"FROM\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">1</field>\
                </block>\
            </value>\
            <value name=\"TO\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">10</field>\
                </block>\
            </value>\
            <value name=\"BY\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">1</field>\
                </block>\
            </value>\
        </block>\
        <block type=\"controls_forEach\"></block>\
        <block type=\"controls_flow_statements\"></block>\
    </category>\
    <category name=\"Math\">\
        <block type=\"math_number\"></block>\
        <block type=\"math_arithmetic\"></block>\
        <block type=\"math_single\"></block>\
        <block type=\"math_trig\"></block>\
        <block type=\"math_constant\"></block>\
        <block type=\"math_number_property\"></block>\
        <block type=\"math_round\"></block>\
        <block type=\"math_on_list\"></block>\
        <block type=\"math_modulo\"></block>\
        <block type=\"math_constrain\">\
            <value name=\"LOW\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">1</field>\
                </block>\
            </value>\
            <value name=\"HIGH\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">100</field>\
                </block>\
            </value>\
        </block>\
        <block type=\"math_random_int\">\
            <value name=\"FROM\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">1</field>\
                </block>\
            </value>\
            <value name=\"TO\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">100</field>\
                </block>\
            </value>\
        </block>\
        <block type=\"math_random_float\"></block>\
    </category>\
    <category name=\"Lists\">\
        <block type=\"lists_create_empty\"></block>\
        <block type=\"lists_create_with\"></block>\
        <block type=\"lists_repeat\">\
            <value name=\"NUM\">\
                <block type=\"math_number\">\
                    <field name=\"NUM\">5</field>\
                </block>\
            </value>\
        </block>\
        <block type=\"lists_length\"></block>\
        <block type=\"lists_isEmpty\"></block>\
        <block type=\"lists_indexOf\"></block>\
        <block type=\"lists_getIndex\"></block>\
        <block type=\"lists_setIndex\"></block>\
    </category>\
    <category name=\"Variables\" custom=\"VARIABLE\"></category>\
    <category name=\"Functions\" custom=\"PROCEDURE\"></category>\
    <sep></sep>\
    <category name=\"2D Shapes\" colour=\"200\">\
    \
        <block type=\"blokscad_circle\"></block>\
        <block type=\"blokscad_square\"></block>\
        <block type=\"blokscad_polygon\"></block>\
        <block type=\"blokscad_polygon_point\"></block>\
    </category>\
    \
    <category name=\"3D Shapes\" colour=\"200\">\
        <block type=\"blokscad_sphere\"></block>\
    </category>\
    <category name=\"Transforms\" colour=\"200\">\
      <block type=\"blokscad_union\"></block>\
      <block type=\"blokscad_difference\"></block>\
      <block type=\"blokscad_intersection\"></block>\
      <sep gap=\"34\"></sep>\
      <block type=\"blokscad_translate3d\"></block>\
      <block type=\"blokscad_translate2d\"></block>\
    </category>\
</xml>"