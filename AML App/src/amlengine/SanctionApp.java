package amlengine;

import amlengine.parser.*;
import amlengine.model.SanctionedEntity;

import java.util.List;

public class SanctionApp {
    public static void main(String[] args) {
        // Absolute path to the OFAC CSV file
        String filePath = "C:\\Users\\Leizo\\IdeaProjects\\AML App\\data\\sanctions\\OFAC _US_Treasury_sdn.csv";

        // Instantiate the CSV reader
        SanctionReader reader = new SanctionReader();

        // Parse the CSV into a list of sanctioned entities
        List<SanctionedEntity> entities = reader.parseOfacCsv(filePath);

        // Print each entity to the console
        for (SanctionedEntity entity : entities) {
            System.out.println(entity);
        }
    }
}
