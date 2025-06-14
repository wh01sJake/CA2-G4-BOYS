package amlengine.parser;

import amlengine.model.SanctionedEntity;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class SanctionReader {

    public List<SanctionedEntity>  parseOfacCsv(String filePath) {
        List<SanctionedEntity> entities = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            boolean isFirstLine = true;

            while ((line = reader.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false;
                    continue; // Skip header
                }

                String[] columns = line.split(",", -1); // Include empty columns

                if (columns.length >= 3) { // Adjust index if your CSV differs
                    String name = columns[0].trim();
                    String country = columns[1].trim();
                    String dob = columns[2].trim();
                    String sanctioningBody = columns[3].trim();

                    entities.add(new SanctionedEntity(name, country, dob, sanctioningBody));
                }
            }

        } catch (IOException e) {
            System.err.println("[ERROR] Failed to read CSV: " + e.getMessage());
        }

        return entities;
    }
}
