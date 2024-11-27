package com.christmas.tree.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TreeCreateRequest(
        @NotNull(message = "위도 값이 존재하지 않습니다.")
        Double latitude,
        @NotNull(message = "경도 값이 존재하지 않습니다.")
        Double longitude,
        @NotBlank(message = "image code가 비어있습니다.")
        String imageCode
) {
}
