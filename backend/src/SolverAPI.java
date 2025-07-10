import static spark.Spark.*;
import com.google.gson.Gson;

public class SolverAPI {
    public static void main(String[] args) {
        port(8080);
        Gson gson = new Gson();

        post("/solve", (req, res) -> {
            CubeState state = gson.fromJson(req.body(), CubeState.class);
            String solution = CubeSolver.solve(state.getCube());
            return gson.toJson(solution);
        });
    }
}
