import Touchable from "../Touchable";
import Card from "../../Card";
import Box from "../../Box";

export default {
  title: "Components/Touchable"
};

export const Default = {
  render: () => (
    <Box margin="s20">
      <Touchable productHover={false}>
        <Card>
          <Box
            alignItems="center"
            height="100px"
            justifyContent="center"
            width="100px"
          >
            Content
          </Box>
        </Card>
      </Touchable>
    </Box>
  ),

  name: "Touchable"
};
