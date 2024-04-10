import React, { useMemo, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { stylesPdf } from "./stylesPdf";
import PdfView from "react-native-pdf";
import { useRoute } from "@react-navigation/native";
import { sermoesData } from "../../data/sermoes";

interface IPages {
  current: number;
}

const Pdf: React.FC = () => {
  const [pages, setPages] = useState<IPages>();
  const {
    params: { id },
  } = useRoute() as { params: { id: string } };

  const pdfData = useMemo(() => {
    const data = sermoesData.find((value) => value.id === id);

    return data;
  }, [id]);

  return (
    <SafeAreaView style={stylesPdf.main}>
      {pdfData && (
        <PdfView
          source={{ uri: pdfData.pdf }}
          style={stylesPdf.pdf}
          onPageChanged={(page, numberOfPages) => {
            setPages({
              current: page,
            });
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Pdf;
